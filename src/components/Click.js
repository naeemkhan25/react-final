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
    
    const {change,locale,Show}=this.props;
    return (
        <div>
        <button  onClick={()=>change(locale)}>
            {locale==='bn-BD'?'Bangla':'English'}
        </button>
        {Show && <p>hello world</p>}
        </div>
    );
}
}

export default Click;