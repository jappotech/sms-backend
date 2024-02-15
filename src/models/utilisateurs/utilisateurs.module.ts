import { Module } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursResolver } from './utilisateurs.resolver';
import { AccountsService } from '../accounts/accounts.service';

@Module({
  providers: [UtilisateursResolver, UtilisateursService, AccountsService],
  exports: [UtilisateursService],
})
export class UtilisateursModule {}
