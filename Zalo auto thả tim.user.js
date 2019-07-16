// ==UserScript==
// @name         Zalo auto thả tim
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chat.zalo.me/
// @grant        none
// @require      https://unpkg.com/axios/dist/axios.min.js
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@8
// ==/UserScript==

(function() {
    'use strict';
    const url = "https://reaction.api.zalo.me/api/group/reaction?zpw_ver=32&zpw_type=30"

    const params = new URLSearchParams();
    params.append('params', 'bndOExGQzNTsLjYrf9ReFiaitZ9wNpLLlqtpo8Baote27oBsL6gbkmpG629BlDlMBcpp1aqq3gUkq2gwY9/s6+txYu3XRXt/I4E3e1cQty6u1mk50j3B+TxxByaBdHATwicbfmLPw+WeRedqT5ZbSKEyskxpwign2Hms7is68wSW7deeEUX6DQ73w1XL39MKrhq2HZGRM5qs3qquxtMM9I+kgSOUpTgrvMm1Izd8xC9U8snbxWbbanOa6mDpIqW6NFeVIEtk/D4mRA0SYCj2SEw6luSb2g9+trOqj1E0eRU=');
    const requestBody = {
        params: 'bndOExGQzNTsLjYrf9ReFiaitZ9wNpLLlqtpo8Baote27oBsL6gbkmpG629BlDlMBcpp1aqq3gUkq2gwY9/s6+txYu3XRXt/I4E3e1cQty6u1mk50j3B+TxxByaBdHATwicbfmLPw+WeRedqT5ZbSKEyskxpwign2Hms7is68wSW7deeEUX6DQ73w1XL39MKrhq2HZGRM5qs3qquxtMM9I+kgSOUpTgrvMm1Izd8xC9U8snbxWbbanOa6mDpIqW6NFeVIEtk/D4mRA0SYCj2SEw6luSb2g9+trOqj1E0eRU=',

    }

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    function getData(){
        axios.post(url, params, config)
            .then((result) => {
            console.log("<3")
        })
            .catch((err) => {
            console.log("err")
        })
    }
    var clickDone = true;
    let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    setTimeout(()=>{
        $("#sidebarNav").click(function(event) {
            setTimeout(()=>{
                $("#messageView").click(async function(event) {
                    var text = $(event.target);
                    if(clickDone){
                        const {value: loopNumInput} = await Swal.fire({
                            title: 'Nhập số lần click',
                            input: 'text',
                            inputValue: "100",
                            showCancelButton: true,
                        })
                        clickDone = false
                        console.log(text)
                        for(var i = 0; i< loopNumInput; i++){
                            text[0].click()
                            await wait(80)
                            console.log(i)
                        }
                        clickDone = true
                    }



                })
            },3000)
            console.log("add event to messageView")
        });
    },3000)
    //console.log($r.store.getState())

    //getData();

    // Your code here...
})();