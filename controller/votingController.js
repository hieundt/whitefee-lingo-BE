import votingModel from '../model/votingModel.js'

export const createVoting = async (req, res, next) => {
  const voting = new votingModel(req.body)
  try {
    await voting.save();
    res.send({ 'status': '200', 'message': 'Create voting successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllVoting = async (req, res, next) => {
  try {
    const votings = await votingModel.find({});
    res.send(votings);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getVotingById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const voting = await votingModel.findById({ _id: id })
    if (!voting) {
      res.send({ 'status': '400', 'message': 'Voting not found' })
      return
    }
    res.send(voting);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateVoting = async (req, res, next) => {
  const { id } = req.params
  const { voting } = req.body
  try {
    const voting = await votingModel.findById({ _id: id })
    if (!voting) {
      res.send({ 'status': '400', 'message': 'Update voting not found' })
      return
    }
    await votingModel.findByIdAndUpdate({ _id: id }, { voting })
    res.send({ 'status': '200', 'message': 'Update voting successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}


export const deleteVoting = async (req, res, next) => {
  const { id } = req.params
  try {
    const voting = await votingModel.findById({ _id: id })
    if (!voting) {
      res.send({ 'status': '400', 'message': 'Delete voting not found' })
    }
    await votingModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete voting successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

