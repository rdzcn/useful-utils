import { notFound } from '@hapi/boom';
import type { Request, Response } from 'express';
import smes from '../data/smes.json';

const getSme = async (req: Request, res: Response) => {
  const smeId = req.body.userData.smeId;
  const sme = smes.find((sme) => sme.id === smeId);

  if (!sme) {
    throw notFound('SME not found');
  }

  res.json(sme);
};

export const SmesController = {
  getSme,
};
