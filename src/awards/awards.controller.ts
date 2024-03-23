import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AwardsService } from './awards.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AwardDto } from './dto/award.dto';
import { AwardCreateRequest } from './contracts/award.create';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/roles/role.decorator';
import { Role } from 'src/auth/roles/role.enum';

@ApiTags('Awards')
@ApiBearerAuth('jwt')
@Controller('awards')
export class AwardsController {
  constructor(private readonly award: AwardsService) {}

  @ApiOkResponse({
    type: AwardDto,
  })
  @Get(':id')
  async get(@Param('id', ParseUUIDPipe) id: string) {
    return this.award.award({ id });
  }

  @ApiOkResponse({
    type: AwardDto,
  })
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  @Post()
  async create(@Body() request: AwardCreateRequest) {
    const { name } = request;
    return this.award.create({ name });
  }

  @ApiOkResponse({
    type: AwardDto,
    isArray: true,
  })
  @Get()
  async all() {
    return this.award.all();
  }
}
