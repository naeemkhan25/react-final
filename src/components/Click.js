import React from "react";

class Click extends React.Component {
     shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }
render(){
    
    const {change,locale}=this.props;
    return (
        <button  onClick={()=>change(locale)}>
            {locale==='bn-BD'?'English':'Bangla'}
        </button>
    );
}
}

export default Click;