import Axios from "axios";

import Swal from 'sweetalert2';

class Authservice {

    reportError( data ) {

        console.log('data', data);

    }


    async post( url, data = [] ) {

        try {

            const response = await Axios.post(url, data)

            return response.data

        } catch ( error ) {

           return false;

        }

    }

}

export default new Authservice();

