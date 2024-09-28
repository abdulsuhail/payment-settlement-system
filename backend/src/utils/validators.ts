// src/utils/validators.ts
import Joi from 'joi';
import { TransactionStatus } from '../types/TransactionStatus';

export const validateTransaction = (data: any) => {
  const schema = Joi.object({
    sender: Joi.string().required(),
    recipient: Joi.string().required(),
    amount: Joi.number().positive().required(),
    description: Joi.string().required()
  });

  return schema.validate(data);
};

export const validateFilters = (data: any) => {
  const schema = Joi.object({
    startDate: Joi.date().iso(),
    endDate: Joi.date().iso().min(Joi.ref('startDate')),
    minAmount: Joi.number().positive(),
    maxAmount: Joi.number().positive().min(Joi.ref('minAmount')),
    status: Joi.string().valid(...Object.values(TransactionStatus))
  });

  return schema.validate(data);
};

export const validateCallback = (data: any) => {
  const schema = Joi.object({
    transactionId: Joi.number().positive().required(),
    status: Joi.string().valid(...Object.values(TransactionStatus)).required()
  });

  return schema.validate(data);
};