import { DatePicker } from "@/components/ui/date-picker";

export function DatePickerStandalone() {
  return (
    <DatePicker.Root open>
      <DatePicker.Input />
      <DatePicker.View view="day">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl>
                <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger>
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableHead>
                  <DatePicker.TableRow>
                    {datePicker.weekDays.map((weekDay, id) => (
                      <DatePicker.TableHeader key={id}>
                        {weekDay.short}
                      </DatePicker.TableHeader>
                    ))}
                  </DatePicker.TableRow>
                </DatePicker.TableHead>
                <DatePicker.TableBody>
                  {datePicker.weeks.map((week, id) => (
                    <DatePicker.TableRow key={id}>
                      {week.map((day, id) => (
                        <DatePicker.TableCell key={id} value={day}>
                          <DatePicker.TableCellTrigger>
                            {day.day}
                          </DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View view="month">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl>
                <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger>
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableBody>
                  {datePicker
                    .getMonthsGrid({ columns: 4, format: "short" })
                    .map((months, id) => (
                      <DatePicker.TableRow key={id}>
                        {months.map((month, id) => (
                          <DatePicker.TableCell key={id} value={month.value}>
                            <DatePicker.TableCellTrigger>
                              {month.label}
                            </DatePicker.TableCellTrigger>
                          </DatePicker.TableCell>
                        ))}
                      </DatePicker.TableRow>
                    ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View view="year">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl>
                <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger>
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableBody>
                  {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                    <DatePicker.TableRow key={id}>
                      {years.map((year, id) => (
                        <DatePicker.TableCell key={id} value={year.value}>
                          <DatePicker.TableCellTrigger>
                            {year.label}
                          </DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
    </DatePicker.Root>
  );
}
