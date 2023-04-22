
export default function randomPassword(){
    return Math.floor(Math.random() * (99999 - 10000)) + 10000
}