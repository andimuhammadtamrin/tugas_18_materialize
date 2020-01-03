import React, {Component} from 'react';
import{
  CardTitle,
  Card,
  Slider,
  Slide,
  MediaBox,
  Row,
  Col,
  Caption,
  Badge,
  SideNav,
  SideNavItem,
  Button,
  Icon,
  Pagination
}from "react-materialize"


class App extends Component {
  render(){
    return (
      <div>

      <SideNav
        trigger={<Button  ><Icon>dehaze</Icon></Button>}
        options={{ closeOnClick: true }}
      >
        <SideNavItem userView
          user={{
            background: "https://materializecss.com/images/office.jpg",
            image: "https://materializecss.com/images/yuna.jpg",
            name: 'Satria Darmawan',
            email: 'test@gmail.com'
          }}
        />
        <SideNavItem href='profil' icon='person_outline'>Profil Saya</SideNavItem>
        <SideNavItem href='kontak' icon="help">Hubungi Kami</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Product</SideNavItem>
        <SideNavItem waves href='Kesehatan'>Kesehatan</SideNavItem>
        <SideNavItem waves href='Komputer'>Komputer & Aksesoris</SideNavItem>
        <SideNavItem waves href='Gaming'>Gaming</SideNavItem>
        <SideNavItem waves href='Kamera'>Kamera</SideNavItem>
        <SideNavItem waves href='Olahraga'>Olahraga</SideNavItem>
        <SideNavItem waves href='Pria'>Fashion Pria</SideNavItem>
        <SideNavItem waves href='Wanita'>Fashion Wanita</SideNavItem>
      </SideNav>
      <br />
      <Slider m='7'
        fullscreen={false}
        options={{
          duration : 500,
          height : 300,
          indicators: true,
          interval:6000
        }}>
        <Slide image={<img alt="gambar1" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
          <Caption placement="center">
            <h3>
              Pantai
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Dapatkan Kesempatan Jalan-Jalan Ke Pantai Dengan Membeli Sebuah Product
            </h5>
          </Caption>
         </Slide>

          <Slide image={<img alt="gambar2" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
            <Caption placement="left">
              <h3>
                Hongkong
              </h3>
              <h5>
                Dapatkan Kesempatan Jalan-Jalan Ke Hongkong Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>

          <Slide image={<img alt="gambar3" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"/>}>
            <Caption placement="center">
              <h3>
                Paris
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Dapatkan Kesempatan Jalan-Jalan Ke Paris Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
      </Slider>
      <h6>Hotlist</h6>
        <Row>
          <MediaBox>
          <Col m="3">
          <Card className="small" header={
            <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
              Audio
            </CardTitle>}>
            <Row>
              <Col>
                Audio Technica-Mulai Dari
                <Badge className="red">Rp910rb</Badge>
              </Col>
            </Row>
          </Card>
          </Col>
          </MediaBox>

          <MediaBox>
          <Col m="3">
          <Card className="small" header={
            <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
              Handphone
            </CardTitle>}>
            <Row>
              <Col>
                Handphone Samsung-Mulai Dari
                <Badge className="red">Rp200drb</Badge>
              </Col>
              <Col></Col>
            </Row>
          </Card>
          </Col>
          </MediaBox>

          <MediaBox>
          <Col m="3">
          <Card className="small" header={
            <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
              Sequishy
            </CardTitle>}>
            <Row>
            <Col>
              Sequishy-Mulai Dari
             <Badge className="red">Rp5,5rb</Badge>
            </Col>
            <Col></Col>
            </Row>

          </Card>
          </Col>
          </MediaBox>

          <MediaBox>
          <Col m="3">
          <Card className="small" header={
            <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
              Koleksi The Avenger
            </CardTitle>}>
              <Row>
              <Col>
                Koleksi The Avenger-Mulai Dari
                <Badge className="red">Rp10rb</Badge>
              </Col>
              <Col></Col>
              </Row>
          </Card>
          </Col>
          </MediaBox>
        </Row>
        <Pagination
          activePage={2}
          item={10}
          leftBtn={<Icon>chevron_left</Icon>}
          maxButtons={8}
          rightBtn={<Icon>chevron_right</Icon>}
        />

      </div>
    );
  }
}

export default App;
