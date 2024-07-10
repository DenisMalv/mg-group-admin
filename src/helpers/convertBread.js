import { BREAD_CRUMBS } from "data/constants"

export function convertBread(pathname,id) {
    const rowBread = pathname.split('/')
    rowBread.shift()
    if(rowBread[rowBread.length-1] === id){
        rowBread.pop()
    }

    return BREAD_CRUMBS.find(el=>el.url === rowBread[0]).values.map((el,i)=>el)
}