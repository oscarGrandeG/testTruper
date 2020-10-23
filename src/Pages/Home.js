import React, { PureComponent } from 'react';

class Home extends PureComponent {
    state = { 
        data: {},
    }

    componentDidMount() {

        fetch('https://api.datos.gob.mx/v1/calidadAire')
        .then(response => response.json())
        .then(data => this.setState({data}));

    }

    render() { 
        const {data} = this.state;
        const { results } = data;

        return (
            <>
                <div>
                    {
                        (results || []).map(items => {
                            const view = (items.stations || []).map(subItem =>(
                                <div key={subItem.id}>
                                    <p>{subItem.id}</p>
                                    <p>{subItem.name}</p>
                                </div>
                            ))
                            return view;
                        })
                    }
                </div>
            </>
        );
    }
}


export default Home;