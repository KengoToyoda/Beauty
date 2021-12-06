import React ,{ useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Image } from './Image';
import AddIcon from '@mui/icons-material/Add';


function Index() {
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
    const csrf  = { csrf_token: csrf_token }
    const [stylist, setStylist] = useState([]);
    const { register, handleSubmit, watch, setValue} = useForm();
    
    useEffect(() => {
        axios
        .get('/home/fetchStylist')
        .then(response => {
            setStylist(response.data)
            const stylist = response.data
            setValue('name', stylist.name);
            setValue('email', stylist.email);
            setValue('age', stylist.age);
            setValue('sex', stylist.sex);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    const onSubmit = data => {
        axios
        .put(`/home/${stylist.id}`, data)
        .then(response => {
            const stylist = response.data
        })
          .catch(error => {
            console.log(error);
        });
    };
    
    return (
        
        <div className="container">
            <Image 
                userName={stylist.name}
                userImage={stylist.image}
                stylistId={stylist.id}
                onSetStylist={setStylist}
            />
            <div className="row justify-content-center">
                <div className="col-md-8">
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">名前</label>
                        <div className="col-sm-10">
                          <input 
                          className="form-control" 
                          name="name" 
                          {...register("name")} 
                          />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">メールアドレス</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" name="email" {...register("email")} />
                        </div>
                    </div>
                    <fieldset className="row mb-3">
                        <label className="col-sm-2 col-form-label">性別</label>
                        <div className="col-sm-10">
                          <div className="form-check">
                            <input className="form-check-input" type="radio"  {...register("sex")} value="1" />
                            <label className="form-check-label">
                              男性
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" {...register("sex")}  value="0" />
                            <label className="form-check-label">
                              女性
                            </label>
                          </div>
                        </div>
                    </fieldset>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">年齢</label>
                        <div className="col-sm-10">
                          <input type="number" className="form-control" name="age" {...register("age")}   />
                        </div>
                    </div>
                    <input name="user[role]" type="hidden" value="stylist" {...register("role")}  />
                    <input type="hidden" name="_token" value={ csrf.csrf_token } />
                    <button type="submit" className="btn btn-primary">保存</button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('mypage')) {
    ReactDOM.render(<Index />, document.getElementById('mypage'));
}
