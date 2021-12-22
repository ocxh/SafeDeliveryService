class Delivery{
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    async Search(){
        return fetch(`http://api.data.go.kr/openapi/tn_pubr_public_female_safety_hdrycstdyplace_api?pageNo=0&numOfRows=1&type=json&ctprvnNm=서울특별시&signguNm=구로구&serviceKey=${this.key}`, 
        this.requestOptions)
        .then(response => response.json())
        .then(result => result)
        };
}

export default Delivery;