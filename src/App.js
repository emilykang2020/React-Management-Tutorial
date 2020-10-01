import React, { Component }  from 'react';

import './App.css';
import Customer from './components/Customer';

const customers =  [
  {
  'id' : '1',
  'image' : 'https://palceimg.com/64/64/1',
  'name' : '에밀리',
  'birthday' :'91630019',
  'gender' : '남자',
  'job': '대학생'
},
{
  'id' : '2',
  'image' : 'https://palceimg.com/64/64/2',
  'name' : '강희라',
  'birthday' :'81630019',
  'gender' : '여자',
  'job': '프로그래머'
},
{
  'id' : '3',
  'image' : 'https://palceimg.com/64/64/3',
  'name' : '강희영',
  'birthday' :'91580019',
  'gender' : '여자',
  'job': '동화책 작가'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c=> {
            return(
            <Customer
             key={c.id}
             id={c.id}
             image={c.image}
             name={c.name}
             birthday={c.birthday}
             gender={c.gender}
             job={c.job}

            />);
          })
        }
      </div>
    );
  }
}

export default App;
