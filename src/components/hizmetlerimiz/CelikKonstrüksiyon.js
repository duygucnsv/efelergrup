import React from 'react'
import { Col,Row,Container } from 'react-bootstrap'
import SectionTitle from '../common/SectionTitle'
import HizmetlerItem from './HizmetlerItem'

const CelikKonstrüksiyon = () => {
  return (
    <Container>      
        <Row>
          <Col> 
          <SectionTitle title="Hizmet Alanlarımız"/>
          <p>    Efeler Grup uzman kadrosu ile kaliteli, sorunsuz, hassas ve hızlı üretim anlayışı çerçevesinde hizmet vermeye devam etmektedir.</p>
          <br></br>

            <HizmetlerItem
            başlık= "ÇELİK KONSTRÜKSİYON NEDİR"
            açıklama= "  Tüm taşıyıcı sistemlerin çelikten üretildiği, özellikle deprem tehdidi taşıyan coğrafi bölgelerde tercih edilen, çoğunlukla çelik konstrüksiyon fabrika binaları, çelik konstrüksiyon hangar, çelik konstrüksiyon spor tesisleri, çelik konstrüksiyon depo ve çelik konstrüksiyon atölyelerde kullanılan, geniş açıklıklara ve yüksekliğe sahip çelik yapı sistemidir."
            />

              <HizmetlerItem
            başlık= "ÇELİK ÇATI SİSTEMLERİ"
            açıklama= "Tüm taşıyıcı sistemlerin çelikten üretildiği, özellikle deprem tehdidi taşıyan coğrafi bölgelerde tercih edilen, çoğunlukla çelik konstrüksiyon fabrika binaları, çelik konstrüksiyon hangar, çelik konstrüksiyon spor tesisleri, çelik konstrüksiyon depo ve çelik konstrüksiyon atölyelerde kullanılan, geniş açıklıklara ve yüksekliğe sahip çelik yapı sistemidir."
            />
             
               <HizmetlerItem
            başlık= "NEDEN ÇELİK YAPI?"
            açıklama= "Çelik, maliyeti uygundur. Ön üretimli, fabrikasyon taşıyıcı elemanlar, düşük fiyata yüksek kalite sağlamakta ve inşaat süresini çok kısaltmaktadır. Çelik, taşıma kapasitesinin ağırlığına oranı en yüksek olan malzemedir. Çeliğin yüksek taşıma kapasitesi sayesinde çelik yapı elemanları, daha küçük kesit ve ölçülerde, daha hafif ve mükemmel kalitelerde üretilmektedir. Çelik yapılarda taşıyıcı eleman boyutları ahşap ve betona göre çok daha küçük olduğu için çok daha fazla kullanım alanı elde edilmektedir. Bu da yapı alanının daha verimli kullanılmasını sağlamaktadır. Fiyat dengesi ve kısa yapım süreleri insanların daha erken yerleşmelerine imkan vererek daha az kira, faiz ve maliyet avantajı elde etmelerine olanak vermektedir."
            />
             
          
  

          </Col>
        </Row>
    </Container>
  )
}

export default CelikKonstrüksiyon