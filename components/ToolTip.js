const ToolTip = props => (
    <div className={"tooltipDiv"}>
            <span className={"tooltip"} style={{fontSize: "22px"}}>&#x1F6C8;
                <span className={"tooltip-text"}>{props.text}</span>
        </span>
    </div>
)
export default ToolTip