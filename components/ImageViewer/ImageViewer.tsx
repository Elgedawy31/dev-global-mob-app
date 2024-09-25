import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import ImageViewer from "react-native-image-zoom-viewer";
const ImageViewerFunc = ({
  images,
  showImageViewer,
  setShowImageViewer,
  selectedImageIndex,
}: any) => { 
  // const images = [
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  //   {
  //     url: "https://th.bing.com/th/id/R.671bc06a35ee10685ab98fc6e49294e7?rik=ro3cZ41Ga%2fFSwA&pid=ImgRaw&r=0",
  //   },
  // ];

  const closeImageViewer = () => {
    setShowImageViewer(false);
  };

  return (
    <View>
      <Modal visible={showImageViewer} transparent={true}>
        <ImageViewer
          imageUrls={images}
          index={selectedImageIndex}
          enableSwipeDown
          onSwipeDown={closeImageViewer}
        />
      </Modal>
    </View>
  );
};

export default ImageViewerFunc;
