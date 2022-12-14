import React, { useEffect } from 'react'
import cup from '/assets/icons-cup.png'
import '../../style/MapMarker.scss'

const { kakao } = window

export const KakaoMap = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map') as HTMLElement
    const mapCenter = new kakao.maps.LatLng(37.5454, 127.0503)

    const options = {
      center: mapCenter,
      level: 4
    }

    const map = new kakao.maps.Map(mapContainer, options)

    const content = `<div class="pin">
          <div class="iconBox">
          <img src=${cup} />
          </div>
          <span>무브모브</span>
          </div>`

    const customOverlay = new kakao.maps.CustomOverlay({
      position: mapCenter,
      content: content,
      xAnchor: 0.18,
      yAnchor: 1.1
    })

    customOverlay.setMap(map)
  }, [])

  const mapWidth = (window.innerWidth * 34.89) / 100
  const mapHeight = (window.innerHeight * 56.94) / 100
  return <div id="map" style={{ width: mapWidth, height: mapHeight }}></div>
}
