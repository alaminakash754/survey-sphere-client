import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Components/Hooks/useAuth";
import { useNavigate } from "react-router-dom";

import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";


const CreateSurvey = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    // console.log(user)
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        
            const storeItem = {
                surveyName: data.name,
                description: data.description,
                category: data.category, 
                ownerName: data.displayName,
            }
            const surveyRes = await axiosSecure.post('/surveys', storeItem);
            console.log(surveyRes.data);
            if(surveyRes.data.insertedId){
                // shop success popup 
                navigate('/dashboard/surveyorHome');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been saved in the database`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        

    }
    return (
        <div className="">
            <Helmet><title>Survey Sphere | Create A New Survey</title></Helmet>
            <SectionTitle heading='Create A New Survey' subHeading='Survey Sphere '></SectionTitle>
            
            <div className="w-5/6 mx-auto bg-purple-50 mt-2">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Survey Title*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Survey Name" className="input input-bordered w-full" />
                    </div>
                   
                    {/* survey info  */}
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Survey Description</span>
                        </label>
                        <textarea {...register('description', { required: true })} className="textarea textarea-bordered h-24" placeholder="Survey Description"></textarea>
                    </div>
                    {/* category  */}
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Survey Category*</span>
                        </label>
                        <input {...register("category", { required: true })} type="text" placeholder="Survey Category " className="input input-bordered w-full" />
                    </div>
                    {/* owner name */}
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Surveyor Owner</span>
                        </label>
                        <input defaultValue={user?.displayName} {...register("displayName", { required: true })} type="text" className="input input-bordered w-full" />
                    </div>

                    <button className="btn btn-block bg-purple-500">Create Survey  </button>
                </form>
            </div>
        </div>
    );
};

export default CreateSurvey;