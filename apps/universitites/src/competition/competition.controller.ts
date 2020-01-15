export default class {
    // @Get('/competition/:specialtyId')
    // public async getCompetition(
    //     req: FastifyRequest,
    //     reply: FastifyReply<ServerResponse>
    // ) {
    //     const { specialtyId } = req.query;

    //     try {
    //         const competition = await CompetitionModel.findOne({
    //             where: { specialtyId }
    //         });

    //         if (competition) {
    //             throw new Error();
    //         }

    //         const response = JSON.stringify(competition);

    //         reply.code(200).send(response);
    //     } catch(_) {
    //         reply.code(404).send(`No competition with "specialtyId" ${specialtyId}`);
    //     }
    // }
}