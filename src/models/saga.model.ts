import { model } from 'mongoose';
import sagaSchema from './schemas/saga.schema';
import { ISaga } from 'src/interfaces/saga.interface';

export default model<ISaga>('Saga', sagaSchema);
