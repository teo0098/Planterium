const validateData = args => {
    try {
        if (!/^[A-Za-z\s]{2,30}$/.test(args.name)) throw new Error();
        if (!/^[0-9]{2,3}$/.test(args.watering) || Number(args.watering) < 24) throw new Error();
        if (args.desc && /[<>]/.test(args.desc)) throw new Error();
        if (args.light && !/^[A-Za-z\s]{2,20}$/.test(args.light)) throw new Error();
    }
    catch {
        return false;
    }
    return true;
}

module.exports = validateData;