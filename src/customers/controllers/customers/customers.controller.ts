import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':id')
  getCutomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(typeof id);
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      return res.status(200).json({
        message: 'Customer found',
        data: customer,
      });
    } else {
      return res.status(404).json({
        message: 'Customer not found',
        data: null,
      });
    }
  }
}
