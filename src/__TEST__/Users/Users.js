import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then((resp) => resp.data);
  }

  static getName() {
    return 'ok';
  }
  static getName2(a) {
    // switch(a){
    //   case 1:
    //     return 1;
    //   case 2:
    //     return 2;
    // }
  }
  static getName3() {
    return 'ok';
  }
}

export default Users;
