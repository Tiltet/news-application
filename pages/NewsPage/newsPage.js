import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { styles } from "../../style";
import { pageStyle } from "./newsPageStyle";
import axios from "axios";
import staticNews from "../../static/staticNews";

export default function NewsPage( {id, handleScrollToTop} ) {

  const [data, setData] = useState(staticNews);

  useEffect(() => {
    handleScrollToTop()
    axios.get(`http://localhost:4000/news/${id}`)
      .then(response => {
        setData(response.data);
        console.log(response.data.id);
      })
      .catch(error => {
        setData(staticNews)
      });
  }, [id]);

  return (
    <View>
      <ImageBackground
        source={{ uri: data.imgUrl }}
      >
        <View style={[pageStyle.header, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
          <View style={styles.container}>
            <View style={pageStyle.header_text}>
              <Text style={pageStyle.category}>Экономика</Text>
              <Text style={pageStyle.title}>{data.title}</Text>
            </View>

            <View style={pageStyle.header_footer}>
              <View style={pageStyle.data}>
                <Text style={pageStyle.data_text}>{data.viewDate}</Text>
              </View>
              <View style={pageStyle.header_footer_icons}>
                <TouchableOpacity>
                  <Image style={{ width: 15, height: 15 }} source={require("../../assets/icons/news/comments.png")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={{ width: 13, height: 13, marginRight: 5 }} source={require("../../assets/icons/news/share.png")}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <Text style={[pageStyle.main_text, { flex: 1, flexWrap: 'wrap' }]}>{data.description.replace(/\s{4}/g, '\n\n')}</Text>
      </View>

      <View style={styles.container}>
        <View style={pageStyle.footer}>
          <Text style={pageStyle.footer_time}>{data.createdAtTime}</Text>
          <TouchableOpacity style={pageStyle.footer_share}>
            <Image style={{ width: 14, height: 14 }} source={require("../../assets/icons/news/share_grey.png")}/>
            <Text style={pageStyle.footer_share_text}>Поделиться</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={pageStyle.buttons}>
          <TouchableOpacity style={pageStyle.button}>
            <Image style={{ width: 25, height: 25 }} source={require("../../assets/icons/poll/like.png")}/>
            <Text style={pageStyle.button_text}>Понравилось</Text>
          </TouchableOpacity>
          <TouchableOpacity style={pageStyle.button}>
            <Image style={{ width: 25, height: 25 }} source={require("../../assets/icons/poll/unlike.png")}/>
            <Text style={pageStyle.button_text}>Не понравилось</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
