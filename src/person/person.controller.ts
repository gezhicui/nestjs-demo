import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { PersonService } from './person.service';

export class CreatePersonDto {
  name: string;
  age: number;
}

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    debugger;
    return `xx: id=${id}`;
  }
  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }

  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  body2(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
