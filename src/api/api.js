import axios from "axios";

class MockProjectApi{
    static async getData(){
       let res = await axios.get("de-data.geojson")
       return res.data
    }
}

export default MockProjectApi