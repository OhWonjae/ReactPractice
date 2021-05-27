//상태 초기값 선언
const initialstate ={
    color:"yellow"
}

//액션 타입
const SET_COLOR = "color/setcolor";

//액션 생성 함수 선언
export const createSetColorAction = (color) => {
    return {type:SET_COLOR, color}
}

//리듀스 선언
const colorReducer = (state=initialstate,action) => {
    if(action.type===SET_COLOR){
        return {color:action.color}
    }else{
        return state;
    }
};

export default colorReducer;