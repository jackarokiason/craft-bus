import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_banner" src="https://cdn0.desidime.com/topics/photos/1074833/original/desktop-banner.jpg?1570986691" alt=""/>
               
            <div className="home_row product1">
                <Product id="1" title="Prime chairs"
                price={5000}
                image="https://3.imimg.com/data3/CE/BQ/MY-8543683/traditional-handicrafts-500x500.jpg" 
                rating={3}/>
                <Product id="2" title="Transteel chairs"
                price={113400}
                image="https://images-na.ssl-images-amazon.com/images/I/61REX93q6xL._SL1500_.jpg" 
                rating={4} />
                
                
            </div>
            <div className="home_row">
            <Product id="3" title="wooden rocking chairs"
                price={18000}
                image="https://img.everychina.com/nimg/a2/6c/be5d763d428989bcbfccbb146326-300x300-0/chinese_gift_traditional_handicrafts_facial_masks_wooden_ladle.jpg" 
                rating={3}/>
                <Product id="4" title="Club chairs"
                price={124000}
                image="https://5.imimg.com/data5/SI/FW/MF/SELLER-63096869/bamboo-garden-chair-500x500-500x500.jpg" 
                rating={5}/>
                
                <Product id="6" title="Milton Slipper chairs"
                price={150000}
                image="https://k8q7r7a2.stackpathcdn.com/wp-content/uploads/2020/10/Patek-Philippe-Rare-Handcrafts-2020-Exhibition-in-Geneva-8.jpg" 
                rating={4}/>
            </div>
            <div className="home_row">
            <Product  id="7" title="Ergonomic sofa"
             price={500000}
                image= "https://images-static.nykaa.com/media/catalog/product/d/e/de4c533pf66e06crm.jpg" 
                rating={5}/>
                 <Product  id="8" title="Oxford ladder sofa"
             price={450000}
                image= "https://5.imimg.com/data5/MB/LA/MY-1528349/handcraft-wooden-money-box-500x500.jpg" 
                rating={5}/>
           
                </div>  
        </div>
        </div> 
            
            
       
    )
}

export default Home

//home