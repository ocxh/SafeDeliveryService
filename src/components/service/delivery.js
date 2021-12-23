class Delivery{
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    async Search(search_value_in){
        let search_value = search_value_in.split(" ");
        console.log(search_value);
        const city = search_value[0];
        const county = search_value[1];

        if (search_value.length == 1){
            return fetch(`http://api.data.go.kr/openapi/tn_pubr_public_female_safety_hdrycstdyplace_api?pageNo=0&numOfRows=100&type=json&ctprvnNm=${city}&serviceKey=${this.key}`, 
            this.requestOptions)
            .then(response => response.json())
            .then(result => result)
        }else{
            return fetch(`http://api.data.go.kr/openapi/tn_pubr_public_female_safety_hdrycstdyplace_api?pageNo=0&numOfRows=5&type=json&ctprvnNm=${city}&signguNm=${county}&serviceKey=${this.key}`, 
            this.requestOptions)
            .then(response => response.json())
            .then(result => result)
        }
    };
}

export default Delivery;