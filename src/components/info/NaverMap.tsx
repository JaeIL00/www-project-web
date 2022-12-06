import React, { useEffect, useRef } from 'react'
import cup from '/assets/icons-cup.png'
import '../../style/MapMarker.scss'

export const NaverMap = () => {
  const mapElement = useRef(null)

  useEffect(() => {
    if (!mapElement.current || !naver) return
    const location = new window.naver.maps.LatLng(37.5454, 127.0503)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      maxZoom: 19
    }
    const map = new naver.maps.Map(mapElement.current, mapOptions)
    const markerOptions = {
      position: location,
      map,
      icon: {
        content: [
          '<div class="pin">',
          '<div class="iconBox">',
          `<img src=${cup} />`,
          '</div>',
          '<span>무브모브</span>',
          '</div>'
        ].join(''),
        size: new naver.maps.Size(30, 37),
        origin: new naver.maps.Point(0, 0)
      }
    }

    const marker = new naver.maps.Marker(markerOptions)
    naver.maps.Event.addListener(marker, 'click', () => {
      const url = 'https://naver.me/5dxyxJ2r'

      window.open(url)
    })
  }, [])
  const mapWidth = (window.innerWidth * 34.89) / 100
  const mapHeight = (window.innerHeight * 56.94) / 100

  const mapStyle = {
    width: mapWidth,
    height: mapHeight
  }

  return (
    <div>
      <div ref={mapElement} style={mapStyle} />
    </div>
  )
}
