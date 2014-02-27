/*:
	@include:
		{
			"work": "work"
		}
	@end-include
*/
divideBigNumber = function divideBigNumber( numbers, callback ){
	/*:
		@meta-configuration:
			{
				"numbers": "string|number..."
			}
		@end-meta-configuration
	*/
	work( "javac divideBigNumber.java && java divideBigNumber " + numbers.join( " " ), callback );
};