// store.ts
//@ts-ignore
import {InjectionKey} from 'vue'
//@ts-ignore
import {Commit, createStore, Store} from 'vuex'
import {type Stocks} from "@/types/stock";
import { nextTick } from 'vue'
import axios from 'axios'
// define your typings for the store state
export interface State {
    count: number,
    stocks: Stocks,
    loading: boolean
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store  = createStore<State>({
    state:  {
        stocks: {},
        count: 7,
        loading: true
    },
    mutations: {
        SET_STOCK(state : State, data: any){
            // console.log({...data});
            //@ts-ignore
            let ltp_positive = state.stocks[data.c]?.ltp_positive??false;
            //@ts-ignore
            let ltp_negative = state.stocks[data.c]?.ltp_negative??false;

            //@ts-ignore
            if( state.stocks[data.c] && data.ltp){
                //@ts-ignore
                //@ts-ignore
                ltp_positive = state.stocks[data.c].ltp > data.ltp;
                //@ts-ignore
                ltp_negative = state.stocks[data.c].ltp < data.ltp
            }
            const item = {
                //@ts-ignore
                c: data.c??state.stocks[data.c].c, // Тикер
                //@ts-ignore
                pcp: data.pcp??state.stocks[data.c].pcp, //Изменение в процентах относительно цены закрытия предыдущей торговой сессии
                //@ts-ignore
                ltr: data.ltr??state.stocks[data.c].ltr, // Биржа последней сделки
                //@ts-ignore
                name: data.name??state.stocks[data.c].name, // Название бумаги
                //@ts-ignore
                ltp: data.ltp??state.stocks[data.c].ltp, // Цена последней сделки
                ltp_positive: ltp_positive,
                ltp_negative: ltp_negative,
                //@ts-ignore
                chg: data.chg??state.stocks[data.c].chg
            }
            //@ts-ignore
            state.stocks[data.c] = item;
        },
        SET_COUNT(state: State, value: number){
            state.count = value;
        },
        SET_LOADING(state: State, value: boolean){
            state.loading = value;
        }
    },
    actions: {
        async getData(commit: Commit, state: State){
            const WebSocketsURL = "wss://wss.tradernet.ru";
            const list = ['RSTI', 'GAZP', 'MRKZ', 'RUAL', 'HYDR', 'MRKS', 'SBER', 'FEES', 'TGKA', 'VTBR', 'ANH.US', 'VICL.US', 'BURG.US', 'NBL.US', 'YETI.US', 'WSFS.US', 'NIO.US', 'DXC.US', 'MIC.US', 'HSBC.US', 'EXPN.EU', 'GSK.EU', 'SHP.EU', 'MAN.EU', 'DB1.EU', 'MUV2.EU', 'TATE.EU', 'KGF.EU', 'MGGT.EU', 'SGGD.EU']
            const ws = new WebSocket(WebSocketsURL);
            ws.onopen = () =>{
                ws.send(JSON.stringify(['quotes', list]));
            }
            ws.onmessage = (resp) =>{
                const [event, data] = JSON.parse(resp.data);
                if(event === 'q'){
                    commit.commit('SET_STOCK', data);
                    commit.commit('SET_COUNT', data.pcp);
                    commit.commit('SET_LOADING', false);
                }
            }
            ws.onerror = (resp) =>{
                console.log(resp);
            }
            ws.onclose = () =>{
                console.log('WS closed!');
            }
            setTimeout(()=>{
                ws.close();
            },10000)
        }
    },
})