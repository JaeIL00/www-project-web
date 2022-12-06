import React, { useEffect } from 'react'
import cup from '/assets/icons-cup.png'
import '../../style/MapMarker.scss'

const { kakao } = window

export const KakaoMap = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map') as HTMLElement //지도를 담을 영역의 DOM 레퍼런스
    const mapCenter = new kakao.maps.LatLng(37.5454, 127.0503)

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: mapCenter, //지도의 중심좌표.
      level: 4 //지도의 레벨(확대, 축소 정도)
    }

    const map = new kakao.maps.Map(mapContainer, options) //지도 생성 및 객체 리턴

    const content = `<a  class="pin" href="https://naver.me/5dxyxJ2r" target="_blank">
          <div class="iconBox">
          <img src=${cup} />
          </div>
          <span>무브모브</span>
          </a>`
    // 커스텀 오버레이를 생성합니다
    const customOverlay = new kakao.maps.CustomOverlay({
      position: mapCenter,
      content: content,
      xAnchor: 0.18,
      yAnchor: 1.1
    })

    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map)
    //드래그 막기
    map.setDraggable(false)
    //줌 막기
    map.setZoomable(false)
  }, [])

  const mapWidth = (window.innerWidth * 34.89) / 100
  const mapHeight = (window.innerHeight * 56.94) / 100
  return <div id="map" style={{ width: mapWidth, height: mapHeight }}></div>
}
