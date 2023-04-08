const counterModel = require("../modals/counterModal")

module.exports.increaseCounter = async (req, res) => {
    console.log("counter value will increase here");
    const counterValue = await counterModel.findOne();
    await counterModel.updateOne(
        {
            $set: {
                num: counterValue.num + 1
            }
        }
    );
    const newCounterValue = await counterModel.findOne();


    return res.status(200).send({
        status: true,
        counter: newCounterValue.num
    })
};

module.exports.decreaseCounter = async (req, res) => {
    console.log("counter value will decrease here");
    const counterValue = await counterModel.findOne();
    await counterModel.updateOne(
        {
            $set: {
                num: counterValue.num - 1
            }
        }
    );
    const newCounterValue = await counterModel.findOne();


    return res.status(200).send({
        status: true,
        counter: newCounterValue.num
    })
}

module.exports.getCounter = async (req, res) => {
    const counterValue = await counterModel.findOne();
    !counterValue && await counterModel({ num: 0 }).save()
    return res.status(200).send({
        status: true,
        counter: counterValue.num
    })
}