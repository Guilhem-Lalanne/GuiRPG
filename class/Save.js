class Save {

    constructor() {
        this.json = {   
                        "1stAttr"   :"gola",
                        "sndAttr"   :"bleu",
                        "thirdAttr" : "red"
                    };
    }

    print() {
        var data = JSON.stringify(this.json);
        console.log(data);
        return data;
    }

}

module.exports = Save;