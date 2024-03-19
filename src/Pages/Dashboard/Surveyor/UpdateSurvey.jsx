import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import useAuth from "../../../Components/Hooks/useAuth";


const UpdateSurvey = () => {
    const updateSurvey = useLoaderData();
    const {surveyName, description, category, _id} = updateSurvey;
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
   
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        
            const updateItem = {
                surveyName: data.name,
                description: data.description,
                category: data.category, 
                ownerName: data.displayName,
            }
            const updateSurveyRes = await axiosSecure.patch(`/surveys/${_id}`, updateItem);
            console.log(updateSurveyRes.data);
            if(updateSurveyRes.data.modifiedCount > 0){
                // shop success popup 
                reset();
               
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            }
        

    }
    return (
        <div className="">
        <Helmet><title>Survey Sphere | Update This Survey</title></Helmet>
        <SectionTitle heading='Update Survey' subHeading='Survey Sphere '></SectionTitle>
        
        <div className="w-3/4 mx-auto bg-purple-50 mt-2">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Survey Title*</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" defaultValue={surveyName} placeholder="Survey Name" className="input input-bordered w-full" />
                </div>
               
                {/* survey info  */}
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Survey Description</span>
                    </label>
                    <textarea {...register('description', { required: true })} className="textarea textarea-bordered h-24" defaultValue={description} placeholder="Survey Description"></textarea>
                </div>
                {/* category  */}
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Survey Category*</span>
                    </label>
                    <input {...register("category", { required: true })} type="text" defaultValue={category} placeholder="Survey Category " className="input input-bordered w-full" />
                </div>
                {/* owner name */}
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Surveyor Owner</span>
                    </label>
                    <input defaultValue={user?.displayName} {...register("displayName", { required: true })} type="text" className="input input-bordered w-full" />
                </div>

                <button className="btn btn-block bg-purple-500"> Update Survey  </button>
            </form>
        </div>
    </div>
    );
};

export default UpdateSurvey;