import { Image } from "antd";
import React from "react";

const ArticlesCard = () => {
    return(
        <div>
            <figure>
                <Image className="rounded-md" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" preview={false}/>
            </figure>
            <p className="font-semibold text-base mt-2">Get to know about DUI Expungement in Texas City</p>
        </div>
    );
};
export default ArticlesCard;