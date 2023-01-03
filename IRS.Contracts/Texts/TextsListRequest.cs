using IRS.Contracts.Common;

namespace IRS.Contracts.Texts;

public class TextsListRequest: PaginationRequest
{
    public bool IsShorthand { get; set; }
}