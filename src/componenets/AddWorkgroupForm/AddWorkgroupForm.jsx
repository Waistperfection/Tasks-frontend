import { useState } from "react";
import cls from "./AddWorkgroupForm.module.css";
import {BtnTextInput} from "../TextInput/TextInput";

function AddWorkgroupForm({addFunction}) {
    // const [crop, setCrop] = useState(true);
    const [crop, setCrop] = useState(false);

    const cardClasses = crop ? [cls.formCard, cls.cropped].join(" ") : cls.formCard
  return (
    <div className={cardClasses}>
      <div className={cls.formHeaderContainer}>
        Добавить новую группу   
        <div className={cls.cropBtn} onClick={(e)=>setCrop(!crop)}></div>
      </div>
      <div className={cls.contentContainer}>
        <p>Для добавления группы введите желаемое название новой группы.</p>
        <p>После этого вы сможете пригласить в нее сотрудников.</p>
        <form action="" onSubmit={addFunction}>
            <BtnTextInput id={"name"} label="Название группы" />
        </form>
      </div>
    </div>
  );
}

export default AddWorkgroupForm;
