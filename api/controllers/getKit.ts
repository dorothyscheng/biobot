import { NextFunction } from 'express';
import { CustomRequest, CustomResponse } from '../models/ApiData';
import { KitShippingDataViewModel } from '../models/KitShippingDataViewModel';
import kitShippingData from '../data/KitShippingData';

const getKit = async (
    req: CustomRequest<{ kitNumber: string }>,
    res: CustomResponse<KitShippingDataViewModel[]>,
    next: NextFunction,
) => {
    try {
        const kitNumber = req.body.kitNumber;
        const results = await kitShippingData.search(kitNumber);
        return res.json(results);
    } catch (e) {
        next(e);
    }
};

export default getKit;
