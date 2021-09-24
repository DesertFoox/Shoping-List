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
      console.log("products: ", [...products, product]);
      setProducts([...products, product]);
      SuccessToast("لیست خرید جدید با موفقیت اضافه شد");
      await AsyncStorage.setItem("ShopLists", JSON.stringify(products));
    } else {
      SuccessToast("لطفا فیلد ها را پر کنید");
    }
    setLoading(false);
    setDisabledButton(false);
  };

  useEffect(() => {
    let prices = allPrice;
    if (products.length) {
      for (let i = 0; i < products.length; i++) {
        prices += parseInt(products[i].price);
      }
      setAllPrice(prices);
    }
  }, [products]);

  const getShopLists = async () => {
    const prods = await AsyncStorage.getItem("ShopLists");
    console.log(prods);
    if (prods !== null) {
      setProducts(JSON.parse(prods));
    }
  };

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
          <Text style={{ color: "#fff" }}>مجموع قیمت خرید ها {allPrice}</Text>
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
        <ScrollView>
          {products.map((x, key) => (
            <View key={key}>
              <Text style={{ color: "#fff" }}>{x.name}</Text>
              <Text style={{ color: "#fff" }}>{x.price}</Text>
              <Text style={{ color: "#fff" }}>{x.date}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ShopingList;
