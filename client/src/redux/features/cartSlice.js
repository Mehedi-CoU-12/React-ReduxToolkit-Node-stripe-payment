import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name: 'cartslice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
            const itemIndex=state.carts.findIndex(i=>i.id===action.payload.id);
            // console.log(itemIndex);
            
            if(itemIndex>=0)
            {
                state.carts[itemIndex].qnty++;
            }
            else
            {
                const temp={...action.payload,qnty:1}
                state.carts=[...state.carts,temp];
            }

        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(cart => cart.id!== action.payload)
        },
        removeSingleIteams:(state,action)=>{
            const itemIndex =state.carts.findIndex(i => i.id=== action.payload.id)

            const number=state.carts[itemIndex].qnty;

            if(number>=1)
            {
                state.carts[itemIndex].qnty--;
            }
            // else
            // {
            //     state.carts=state.carts.filter(i=>i.id!==action.payload.id);
            // }
        },
        emptycartIteam:(state,action)=>{
            state.carts=[];
        }
    }
});

export const {addToCart, removeFromCart,removeSingleIteams,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;