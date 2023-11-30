package api

import (
	"zbackend/data/models"
)

type PaginatedResponse struct {
	HasNext bool                                   `json:"hasNext"`
	Data    []models.TransactionWithDonationObject `json:"data"`
}
