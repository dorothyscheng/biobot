import { NextFunction } from 'express';
import { CustomRequest, CustomResponse } from '../models/ApiData';
import kitShippingData from '../KitShippingData';

const getKit = async (req: CustomRequest<{ kitNumber: string }>, res: CustomResponse<string>, next: NextFunction) => {
    try {
        const kitNumber = req.body.kitNumber;
        const results = await kitShippingData.search(kitNumber);
        console.log(results);
        return res.json('done');
    } catch (e) {
        next(e);
    }
};

export default getKit;
