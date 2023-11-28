package donations

import (
	"net/http"
	"zbackend/data/query"

	"github.com/labstack/echo/v4"
)

func GetAll(c echo.Context) error {
	donations, err := query.GetDonations()
	if err != nil {
		return c.String(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, donations)
}
