import React,{useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from './../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor: '#FFF000',
    }
    const [values, setValues] = useState([]);
    const [categorias, setCategorias] = useState([]);

    function setValue(key,value){
        setValues({
            ...values,
            [key]: value,
        })
    }

   function handleChange(infoEvent){
       const {getAttribute,value} = infoEvent.target;
        setValue(
            getAttribute('name')
            ,value
            );
    };
    return (
    <PageDefault >
         <h1>Cadastro de Categoria {values.nome}</h1>
         <form onSubmit={function handleSubmit(event){
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValue(valoresIniciais);
         }}>
            <FormField
                value={values.nome}
                onChang={handleChange}
                name="nome"
                type="text"
                label="Descrição da categoria"
            />
            <div/>
            <div>
                <label>
                    <textarea
                    type="text"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                    />
                </label>
            </div>
            
            <FormField
                value={values.nome}
                onChang={handleChange}
                name="cor"
                type="color"
                label="Cor: "
            />
                <div>
                    <button>
                        Cadastrar
                    </button>
                </div>
             
         </form>
         <ul>
             {categorias.map((categoria,index)=> {
                 return (
                     <li key={index}>
                        {categoria.nome} 
                     </li>
                 )
             })}
         </ul>
         <Link to="/">
            Ir para Home
         </Link>
    </PageDefault>
       

    );
}

export default CadastroCategoria;