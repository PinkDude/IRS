using System.ComponentModel.DataAnnotations;

namespace IRS.Contracts.Common;

public class PaginationRequest
{
    [Range(0, int.MaxValue)]
    public int Skip { get; set; } = 0;

    [Range(1, 100)]
    public int Take { get; set; } = 10;
}