

let bagItems=[];
let str=localStorage.getItem('bagItems');
bagItems=str ? JSON.parse(str) :[];
displayBagIcon();

let itemContainerElement=document.querySelector('.items-container');
let items=[

    {
        id:'001',
        image:'image/trend/21.webp',
        company: 'boohooMAN',
        item_name:' Topical Print Sheer Organza Boxy Casual Shirt',
        current_price:1049,
        original_price:2099,
        discount_percentage:50,
        return_period: 7,
        delivery_date: '24 april 2024',
        rating:{
            stars:2.2,
            count:210,
        },  
    },
    
   {
        id:'002',
        image:'image/trend/22.avif',
        company: 'boohooMAN',
        item_name:'Aviator Sunglasses With UV Protected Lens BMM03552',
        current_price:923,
        original_price:1649,
        discount_percentage:50,
        return_period: 7,
        delivery_date: '24 april 2024',
        rating:{
            stars:2.8,
            count:495,
        },  
    },
    {
        id:'003',
        image:'image/trend/24.avif',
        company:'boohooMAN',
        item_name: 'Printed Oversized Pure Cotton T-shirt',
        original_price: 599,
        current_price: 1199,
        discount_percentage: 50,
        return_period: 7,
        delivery_date: '24 april 2024',
        
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'image/trend/25.avif',
        company: 'boohooMAN',
        item_name: 'Printed Party Bow Tie',
        original_price: 436,
        current_price: 949,
        discount_percentage: 54,
        return_period: 7,
        delivery_date: '24 april 2024',
        rating: {
            stars: 3.9,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'image/trend/jackCap.avif',
        company: 'boohooMAN',
        item_name: 'Pure Cotton Baseball cap',
        original_price: 1399,
        current_price: 599,
        discount_percentage: 60,
        return_period: 29,
        delivery_date: '24 april 2024',
        rating: {
            stars: 2.4,
            count: 351,
        },
    },
    {
        id: '006',
        image: 'image/trend/26.jpg',
        company: 'boohooMAN',
        item_name: 'Men checked OverSized Pure Cotton Casual Shirt',
        original_price: 2999,
        current_price: 1799,
        discount_percentage: 40,
        return_period: 29,
        delivery_date: '24 april 2024',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'image/trend/27.webp',
        company: 'boohooMAN',
        item_name: 'Men Slim Fit single breasted blazer',
        original_price: 7549,
        current_price: 4529,
        discount_percentage: 40,
        return_period: 29,
        delivery_date: '24 april 2024',
        rating: {
            stars: 4.7,
            count: 3880,
        },
    },
    {
        id: '008',
        image: 'image/trend/28.jpg',
        company: 'boohooMAN',
        item_name: 'leather carholder & key Rinf Gift set',
        original_price: 755,
        current_price: 1349,
        discount_percentage: 44,
        return_period: 29,
        delivery_date: '24 april 2024',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
                id:'009',
                image:'image/1.jpg',
                company: 'carlton london',
                item_name:' rhodium-plated cz floral studs',
                current_price:600,
                original_price:1045,
                discount_percentage:42,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating:{
                    stars:4.5,
                    count:1400,
                },  
            },
            
           {
                id:'10',
                image:'image/2.jpg',
                company: 'CUKOO',
                item_name:'Women Padded Halter Neck Swimming Dress',
                current_price:1507,
                original_price:2599,
                discount_percentage:42,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating:{
                    stars:4.3,
                    count:24,
                },  
            },
            {
                id:'11',
                image:'image/3.jpg',
                company:'NUEVOSDAMAS',
                item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
                original_price: 1599,
                current_price: 495,
                discount_percentage: 69,
                return_period: 29,
                delivery_date: '24 april 2024',
                
                rating: {
                    stars: 4.1,
                    count: 249,
                },
            },
            {
                id: '12',
                image: 'image/4.jpg',
                company: 'ADIDAS',
                item_name: 'Indian Cricket ODI Jersey',
                original_price: 999,
                current_price: 999,
                discount_percentage: 0,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating: {
                    stars: 5.0,
                    count: 10,
                },
            },
            {
                id: '13',
                image: 'image/5.jpg',
                company: 'Roadster',
                item_name: 'Pure Cotton T-shirt',
                original_price: 1399,
                current_price: 489,
                discount_percentage: 65,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating: {
                    stars: 4.2,
                    count: 3500,
                },
            },
            {
                id: '14',
                image: 'image/trend/shoes.avif',
                company: 'Nike',
                item_name: 'Men ReactX Running Shoes',
                original_price: 14995,
                current_price: 14995,
                discount_percentage: 0,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating: {
                    stars: 0.0,
                    count: 0,
                },
            },
            {
                id: '15',
                image: 'image/7.jpg',
                company: 'The Indian Garage Co',
                item_name: 'Men Slim Fit Regular Shorts',
                original_price: 1599,
                current_price: 639,
                discount_percentage: 60,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating: {
                    stars: 4.2,
                    count: 388,
                },
            },
            {
                id: '16',
                image: 'image/trend/perfume.avif',
                company: 'DJOKR',
                item_name: 'Men Fresh Deodrant 150ml',
                original_price: 285,
                current_price: 142,
                discount_percentage: 50,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating: {
                    stars: 4.2,
                    count: 5200,
                },
            },
            {
                id: '17',
                image: 'image/trend/29.avif',
                company: 'Skybag',
                item_name: 'CityScape Cabin Trolly Suitcase',
                original_price: 7998,
                current_price: 3999,
                discount_percentage: 50,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating: {
                    stars: 4.9,
                    count: 5200,
                },
            },
            {
                id: '18',
                image: 'image/trend/30.avif',
                company: 'French Connection',
                item_name: 'Unisex Black Solid E17-c full Touch BlueThooth Smart Watches',
                original_price: 9499,
                current_price: 3324,
                discount_percentage: 65,
                return_period: 29,
                delivery_date: '24 april 2024',
                rating: {
                    stars: 4.2,
                    count: 5200,
                },
            }

    ];

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon(){
    let bagItemCount=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCount.style.visibility='visible';
        bagItemCount.innerHTML=bagItems.length;
       
    }
    else{
        bagItemCount.style.visibility='hidden';
    }
}

function displayItem(){
    let itemContainerElement=document.querySelector(".items-container");
    if(!itemContainerElement){
        return;
    }
    let innerHTML=' ';
    items.forEach(items=>{
    innerHTML += `
    <div class="item-container">
        <img class="item-image " src='${items.image}' alt="item-image">
        <div class="rating">
            ${items.rating.stars} ⭐|| ${items.rating.count}
        </div>
        <div class="company-name">
           ${items.company}
        </div>
        <div class="item-name">
            ${items.item_name}
        </div>
        <div class="price">
            <span class="current-price">Rs ${items.current_price}</span>
            <span class="original-price">Rs ${items.original_price}</span>
            <span class="discount">(${items.discount_percentage}% off)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${items.id});">Add to Bag</button>
    </div>`;
});

itemContainerElement.innerHTML=innerHTML;
}

displayItem();


