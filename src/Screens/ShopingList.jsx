import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";

import { Button, Badge, Text, withBadge } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SafeAreaView from "../Components/SafeAreaView/SafeAreaView";
import Input from "../Components/Input/Input";
import { ErrorToast, SuccessToast } from "../Components/Toast/Toast";
const ShopingList = () => {
  const [allPrice, setAllPrice] = useState(0);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDate, setProductDate] = useState(0);

  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const [products, setProducts] = useState([]);

  const createProduct = async () => {
    setLoading(true);
    setDisabledButton(true);
    if (productName !== "" && productPrice !== "" && productDate !== "") {
      const product = {
        id: Math.random(1 * 10),
        name: productName,
        price: productPrice,
        date: productDate,
      };
      setProducts([...products, product]);
      SuccessToast("لیست خرید جدید با موفقیت اضافه شد");
      await AsyncStorage.setItem("ShopLists", JSON.stringify(products));
    } else {
      ErrorToast("لطفا فیلد ها را پر کنید");
    }
    setLoading(false);
    setDisabledButton(false);
  };

  const getShopLists = async () => {
    const prods = await AsyncStorage.getItem("ShopLists");
    if (prods !== null) {
      setProducts(JSON.parse(prods));
    }
  };

  const deleteShopList = async (id) => {
    const prods = products.filter((x) => x.id !== id);
    let prices = allPrice;
    if (products.length) {
      for (let i = 0; i < products.length; i++) {
        console.log("prodss", products[i].price);
        prices -= parseInt(products[i].price);
        console.log("prices: ", prices);
      }
      setAllPrice(prices);
    }
    setProducts(prods);
    await AsyncStorage.setItem("ShopLists", JSON.stringify(prods));
    SuccessToast("این لیست خرید با موفقیت حذف شد");
  };

  useEffect(() => {
    let prices = 0;
    if (products.length) {
      for (let i = 0; i < products.length; i++) {
        prices += parseInt(products[i].price);
        console.log(products);
      }
      setAllPrice(prices);
    }
  }, [products]);

  useEffect(() => {
    getShopLists();
  }, []);
  return (
    <SafeAreaView justify={false}>
      <Badge
        badgeStyle={{
          backgroundColor: "#534F4F",
          borderColor: "#534F4F",
          padding: 30,
        }}
        value={
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            مجموع قیمت خرید ها : {allPrice} تومان
          </Text>
        }
      />
      <View style={{ width: 350, marginTop: 70 }}>
        <Input
          type="default"
          onChangeText={(e) => setProductName(e)}
          placeHolder="نام محصول"
        />
        <Input
          type="numeric"
          onChangeText={(e) => setProductPrice(e)}
          placeHolder="قیمت محصول"
        />
        <Input
          type="default"
          onChangeText={(e) => setProductDate(e)}
          placeHolder="تاریخ"
        />
        <View style={{ marginTop: 10 }}>
          <Button
            disabled={disabledButton}
            raised
            loading={loading}
            onPress={createProduct}
            title="ایجاد"
            buttonStyle={{ color: "#fff", backgroundColor: "#E4AE00" }}
            disabledStyle={{ backgroundColor: "#F0D273" }}
          />
        </View>
      </View>
      <View>
        <Badge
          badgeStyle={{
            backgroundColor: "#534F4F",
            borderColor: "#534F4F",
            padding: 30,
            marginTop: 15,
          }}
          value={
            <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
              خرید ها
            </Text>
          }
        />
        <ScrollView>
          {products.map((x, key) => (
            <View
              style={{
                backgroundColor: "#534F4F",
                paddingHorizontal: 30,
                paddingVertical: 15,
                marginTop: 20,
                width: 330,
                flex: 1,
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                borderRadius: 10,
              }}
              key={key}
            >
              <View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 17,
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  {x.name}
                </Text>
                <Text
                  style={{
                    color: "#00FF77",
                    fontSize: 17,
                    marginTop: 13,
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  {" "}
                  {x.price} تومان
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={{ color: "#A7A7A7", fontSize: 15, fontWeight: "bold" }}
                >
                  {" "}
                  {x.date}
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Button
                    buttonStyle={{
                      color: "#fff",
                      backgroundColor: "#FD5353",
                      width: 60,
                    }}
                    titleStyle={{ fontWeight: "bold" }}
                    onPress={() => deleteShopList(x.id)}
                    title="حذف"
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ShopingList;
