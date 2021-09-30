import React from 'react';

export default class Form extends React.Component {
   state = {
       name:'naeem',text:'hello naeem khan',selectValue:'react',isview:true
    };
  formHandle=(e)=>{
        const {name,text,selectValue,isview}=this.state;
      e.preventDefault();
     console.log(name,text,selectValue,isview); 
  }
    textHandle=(e)=>{
        if(e.target.type === 'text'){
         this.setState({name:e.target.value})
        }else if(e.target.type === 'textarea'){
           this.setState({text:e.target.value})  
        }else if(e.target.type === 'select-one'){
         
            this.setState({selectValue:e.target.value})  
        }else if(e.target.type === 'checkbox'){
             this.setState({isview:e.target.checked})  
             
        }
      
    }
    render() {
        const {name,text,selectValue,isview}=this.state;
        return (
            <form onSubmit={this.formHandle}>
                <label>
                    Name:
                    <input type="text" placeholder="enter your Name" value={name} onChange={this.textHandle}/>
                </label>
                <br/>
                <br/>
                <textarea name="textData" value={text} onChange={this.textHandle}/>
                <br/>
                  <select name="seletValue" value={selectValue}  onChange={this.textHandle}>
                      <option value="react">react</option>
                      <option value="vue">Vue js</option>
                      <option value="javscript">javascript</option>
                      </select>
                <br/>
                <input type="checkbox" checked={isview} onChange={this.textHandle}/>
                <br/>
                <input type="submit" value="Submit" />
                
             </form> 
        );
    }
}